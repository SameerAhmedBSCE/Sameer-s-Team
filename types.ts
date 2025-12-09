import React from 'react';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string; // URL to the image
  description: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface AnalyticsData {
  views: number;
  lastVisited: string;
  contactClicks: number;
}