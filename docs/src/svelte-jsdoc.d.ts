// Type declarations for svelte-highlight and codesandbox
declare module 'svelte-highlight' {
  import type { SvelteComponent } from 'svelte';
  export class HighlightAuto extends SvelteComponent<{ code: string }> {}
  export class Highlight extends SvelteComponent<{ code: string; language: string }> {}
}

declare module 'codesandbox/lib/api/define' {
  export function getParameters(params: any): string;
}
