# Read the mapping file
$mappings = @{}
Get-Content "commit-msg-map.txt" | ForEach-Object {
    if ($_ -and -not $_.StartsWith("#")) {
        $parts = $_ -split "==="
        if ($parts.Count -eq 2) {
            $mappings[$parts[0].Trim()] = $parts[1].Trim()
        }
    }
}

# Create the msg-filter script content
$filterScript = @'
#!/bin/bash
msg=$(cat)
'@

foreach ($key in $mappings.Keys) {
    $oldMsg = $key -replace '"', '\"' -replace '\$', '\$'
    $newMsg = $mappings[$key] -replace '"', '\"' -replace '\$', '\$'
    $filterScript += "`nif [ `"`$msg`" = `"$oldMsg`" ]; then echo `"$newMsg`"; exit 0; fi"
}

$filterScript += "`necho `"`$msg`""

# Write the filter script
$filterScript | Out-File -FilePath "msg-filter.sh" -Encoding utf8 -NoNewline

Write-Host "Created msg-filter.sh with $($mappings.Count) mappings"
Write-Host "Run: git filter-branch -f --msg-filter 'bash msg-filter.sh' -- --all"
