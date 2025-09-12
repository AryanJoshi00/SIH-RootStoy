import { clsx } from "clsx";

export function cn(...inputs) {
  return clsx(inputs);
}

export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export function formatDateTime(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export function getStatusColor(status) {
  switch (status.toLowerCase()) {
    case 'certified':
    case 'pass':
    case 'safe':
      return 'emerald';
    case 'pending':
    case 'warning':
      return 'amber';
    case 'recalled':
    case 'fail':
    case 'unsafe':
      return 'red';
    default:
      return 'earth';
  }
}

export function getStatusBadgeClass(status) {
  switch (status.toLowerCase()) {
    case 'certified':
    case 'pass':
    case 'safe':
      return 'badge-success';
    case 'pending':
    case 'warning':
      return 'badge-warning';
    case 'recalled':
    case 'fail':
    case 'unsafe':
      return 'badge-error';
    default:
      return 'badge-warning';
  }
}
