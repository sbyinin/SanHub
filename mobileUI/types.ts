import React from 'react';

export enum UserRole {
  GUEST = 'GUEST',
  USER = 'USER',
  ADMIN = 'ADMIN'
}

export interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<any>;
  isAdmin?: boolean;
}

export interface ImageGeneration {
  id: string;
  prompt: string;
  url: string;
  model: string;
  createdAt: string;
  likes: number;
}

export interface GenerationModel {
  id: string;
  name: string;
  type: 'image' | 'video' | 'audio';
  provider: 'Gemini' | 'OpenAI' | 'StableDiffusion' | 'Sora';
  cost: number;
}

export interface UserStats {
  totalGenerations: number;
  credits: number;
  plan: string;
}