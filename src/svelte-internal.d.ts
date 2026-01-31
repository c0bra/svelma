// Type declarations for svelte/internal
declare module 'svelte/internal' {
  import type { SvelteComponent } from 'svelte';
  
  export function bubble(component: SvelteComponent, event: Event): void;
  export function listen(node: Node, event: string, handler: (event: Event) => void): () => void;
  export const current_component: SvelteComponent;
}
