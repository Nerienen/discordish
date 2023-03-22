import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SideBarButtonComponent } from './side-bar-button.component'
import { Server } from 'src/app/shared/interfaces'
@Component({
   selector: 'side-bar',
   standalone: true,
   changeDetection: ChangeDetectionStrategy.OnPush,
   template: `
      <div
         class="fixed left-0 flex h-full flex-col items-center gap-2 bg-zinc-800 p-3 pb-2 pt-2 text-zinc-200 scrollbar-hide"
      >
         <!--//todo overflow-x-hidden overflow-y-auto  -->
         <p class="text-xs font-bold text-zinc-400">Discord</p>
         <side-bar-button
            [iconClass]="'fa-brands fa-discord h-7 w-7'"
            [textName]="'Mensajes directos'"
            [color]="'blue'"
            [selectable]="true"
         />
         <hr class="w-8 self-center border-[1.5px] border-zinc-700" />
         <side-bar-button *ngFor="let server of servers" [color]="'blue'" [server]="server" />
         <side-bar-button [iconClass]="'fa-solid fa-plus'" [color]="'green'" [textName]="'Añadir un servidor'" />
         <side-bar-button
            [iconClass]="'fa-solid fa-compass'"
            [textName]="'Explorar servidores públicos'"
            [color]="'green'"
            [selectable]="true"
         />
      </div>
   `,
   imports: [CommonModule, SideBarButtonComponent],
})
export class SideBarComponent {
   servers: Server[] = [
      {
         name: 'tbu',
         image: '/assets/images/tbu_wench.png',
      },
      {
         name: 'El servidor más Wapo!',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
      {
         name: 'El servidor de ferrran junio asdfasdf asdf asdf asdfasd fasdf asdf',
         image: '',
      },
   ]
}
