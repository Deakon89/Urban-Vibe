import {
    trigger,
    transition,
    style,
    query,
    group,
    animate,
  } from '@angular/animations';
  
  export const routeAnimations = trigger('routeAnimations', [
    transition('* <=> *', [
      // Imposta stile base
      query(':enter, :leave', [
        style({
          position: 'absolute',
          width: '100%',
          top: 0,
          left: 0,
        })
      ], { optional: true }),
  
      // Fase iniziale: nuovo componente entra da destra
      query(':enter', [
        style({
          transform: 'translateX(100%)',
          opacity: 0
        })
      ], { optional: true }),
  
      // Fase di animazione: esci e entra contemporaneamente
      group([
        query(':leave', [
          animate('3000ms ease', style({
            transform: 'translateX(-30%)',
            opacity: 0
          }))
        ], { optional: true }),
        query(':enter', [
          animate('3000ms ease', style({
            transform: 'translateX(0)',
            opacity: 1
          }))
        ], { optional: true })
      ])
    ])
  ]);
  
  