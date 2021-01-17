import { APP_BOOTSTRAP_LISTENER, Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';

import { ServiciosService } from 'src/app/modules/servicios/services/servicios.sevice';

@Component({
  selector: 'ape-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss'],
})
export class ServiciosComponent implements OnInit {
  constructor(private serviciosService: ServiciosService) {}

  ngOnInit(): void {
    document.getElementById('boton1').addEventListener('click', () => {
      document.getElementById('slide1').style.opacity = '1';
      document.getElementById('slide2').style.opacity = '0';
      document.getElementById('slide3').style.opacity = '0';
      document.getElementById('slide4').style.opacity = '0';
      if (document.getElementById('boton2').className === 'boton activado' &&
      document.getElementById('boton3').className === 'boton activado' &&
      document.getElementById('boton4').className === 'boton activado'){
        document.getElementById('boton4').className = 'boton desactivado';
        document.getElementById('separador3').style.transitionDelay = '1.2s';
        document.getElementById('separador3').className = 'separador desactivado';
        document.getElementById('boton3').style.transitionDelay = '1.7s';
        document.getElementById('boton3').className = 'boton desactivado';
        document.getElementById('separador2').style.transitionDelay = '2.3s';
        document.getElementById('separador2').className = 'separador desactivado';
        document.getElementById('boton2').style.transitionDelay = '2.8s';
        document.getElementById('boton2').className = 'boton desactivado';
        document.getElementById('separador1').style.transitionDelay = '3.1s';
        document.getElementById('separador1').className = 'separador desactivado';

      }else if (document.getElementById('boton2').className === 'boton activado' && document.getElementById('boton3').className === 'boton activado'){
        document.getElementById('boton3').className = 'boton desactivado';
        document.getElementById('separador2').style.transitionDelay = '1.2s';
        document.getElementById('separador2').className = 'separador desactivado';
        document.getElementById('boton2').style.transitionDelay = '1.6s';
        document.getElementById('boton2').className = 'boton desactivado';
        document.getElementById('separador1').style.transitionDelay = '2.4s';
        document.getElementById('separador1').className = 'separador desactivado';

      }else if (document.getElementById('boton2').className === 'boton activado'){
        document.getElementById('boton2').className = 'boton desactivado';
        document.getElementById('separador1').style.transitionDelay = '.5s';
        document.getElementById('separador1').className = 'separador desactivado';
      }
    });

    document.getElementById('boton2').addEventListener('click', () => {
      document.getElementById('slide1').style.opacity = '0';
      document.getElementById('slide2').style.opacity = '1';
      document.getElementById('slide3').style.opacity = '0';
      document.getElementById('slide4').style.opacity = '0';
      document.getElementById('separador1').className = 'separador activado';
      document.getElementById('boton2').className = 'boton activado';
      document.getElementById('boton2').style.transitionDelay = '.2s';

      if (document.getElementById('boton3').className === 'boton activado' && document.getElementById('boton4').className === 'boton activado'){
        document.getElementById('boton4').className = 'boton desactivado';
        document.getElementById('separador3').style.transitionDelay = '1.2s';
        document.getElementById('separador3').className = 'separador desactivado';
        document.getElementById('boton3').style.transitionDelay = '1.6s';
        document.getElementById('boton3').className = 'boton desactivado';
        document.getElementById('separador2').style.transitionDelay = '2s';
        document.getElementById('separador2').className = 'separador desactivado';


      }else if (document.getElementById('boton3').className === 'boton activado'){
        document.getElementById('boton3').className = 'boton desactivado';
        document.getElementById('separador2').style.transitionDelay = '1s';
        document.getElementById('separador2').className = 'separador desactivado';
      }
    });

    document.getElementById('boton3').addEventListener('click', () => {
      document.getElementById('slide1').style.opacity = '0';
      document.getElementById('slide2').style.opacity = '0';
      document.getElementById('slide3').style.opacity = '1';
      document.getElementById('slide4').style.opacity = '0';
      if (document.getElementById('boton2').className === 'boton activado'){
        document.getElementById('separador2').className = 'separador activado';
        document.getElementById('boton3').style.opacity = '1s';
        document.getElementById('boton3').className = 'boton activado';
      }else{
      document.getElementById('separador1').className = 'separador activado';
      document.getElementById('boton2').style.transitionDelay = '1s';
      document.getElementById('boton2').className = 'boton activado';

      document.getElementById('separador2').style.transitionDelay = '1.5s';
      document.getElementById('separador2').className = 'separador activado';
      document.getElementById('boton3').style.transitionDelay = '2s';
      document.getElementById('boton3').className = 'boton activado';
      }
      if (document.getElementById('boton4').className === 'boton activado'){
        document.getElementById('boton4').className = 'boton desactivado';
        document.getElementById('separador3').style.transitionDelay = '1s';
        document.getElementById('separador3').className = 'separador desactivado';
      }

    });

    document.getElementById('boton4').addEventListener('click', () => {
      document.getElementById('slide1').style.opacity = '0';
      document.getElementById('slide2').style.opacity = '0';
      document.getElementById('slide3').style.opacity = '0';
      document.getElementById('slide4').style.opacity = '1';
      if (document.getElementById('boton3').className === 'boton activado'){
        document.getElementById('separador3').className = 'separador activado';
        document.getElementById('boton4').className = 'boton activado';
        document.getElementById('boton4').style.transitionDelay = '.8s';
      }
      if (document.getElementById('boton2').className === 'boton desactivado' && document.getElementById('boton3').className === 'boton desactivado'){
        document.getElementById('separador1').className = 'separador activado';
        document.getElementById('boton2').className = 'boton activado';
        document.getElementById('boton2').style.transitionDelay = '.2s';
        document.getElementById('separador2').className = 'separador activado';
        document.getElementById('separador2').style.transitionDelay = '.5s';
        document.getElementById('boton3').className = 'boton activado';
        document.getElementById('boton3').style.transitionDelay = '.8s';
        document.getElementById('separador3').className = 'separador activado';
        document.getElementById('separador3').style.transitionDelay = '1s';
        document.getElementById('boton4').className = 'boton activado';
        document.getElementById('boton4').style.transitionDelay = '1.2s';
      }else if (document.getElementById('boton3').className === 'boton desactivado'){
        document.getElementById('separador2').className = 'separador activado';
        document.getElementById('separador2').style.transitionDelay = '.2s';
        document.getElementById('boton3').className = 'boton activado';
        document.getElementById('boton3').style.transitionDelay = '.5s';
        document.getElementById('separador3').className = 'separador activado';
        document.getElementById('separador3').style.transitionDelay = '.8s';
        document.getElementById('boton4').className = 'boton activado';
        document.getElementById('boton4').style.transitionDelay = '1s';
      }
    });
  }

}
