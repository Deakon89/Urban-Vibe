import { RenderMode, ServerRoute } from '@angular/ssr';


export const serverRoutes: ServerRoute[] = [
  {
    path: 'display/:city',
    renderMode: RenderMode.Server
  },  
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
