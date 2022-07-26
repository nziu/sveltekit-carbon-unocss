import { goto } from '$app/navigation';
import { removeItem } from '$lib/common';

export function logout() {
  removeItem('token');
  goto('/login');
}
