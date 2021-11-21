import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface GeoObjectConstructor {
  feature: ymaps.IGeoObjectFeature,
  options: ymaps.IGeoObjectOptions
}

interface PlacemarkConstructor {
  geometry: number[];
  properties: ymaps.IPlacemarkProperties;
  options: ymaps.IPlacemarkOptions;
}

@Component({
  selector: 'map-root',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})


export class MapComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  polCords: any = [];
  pointCords: any = [];
  req: any;
  flag: boolean = true;

  constructor(private httpClient: HttpClient) { }

  clustererOptions: ymaps.IClustererOptions = {
    gridSize: 32,
    preset: 'islands#greenClusterIcons',
  };

  geoObjects: GeoObjectConstructor[] = this.polCords
  placemarks: PlacemarkConstructor[] = this.pointCords

  public ngOnInit(): void {

    this.httpClient.get("../../assets/data.json").subscribe(data => {
      this.req = data
      var i;
      for (i = 0; i < this.req.items.length; i++) {
        var j;
        let cord = []

        var phone = ""
        var site = ""
        try {
          phone = this.req.items[i].phone.RUSSIAN
          site = this.req.items[i].site.RUSSIAN
        } catch (err) {
          try {
            phone = this.req.items[i].phone.RUSSIAN
          } catch (err) {
            site = this.req.items[i].site.RUSSIAN
          }
        }

        if (this.req.items[i].visualType == "Point") {
          cord.push([this.req.items[i].coords[0][0].latitude, this.req.items[i].coords[0][0].longitude])

          var adres
          if (this.req.items[i].address.RUSSIAN != 'Имеется') {
            adres = this.req.items[i].address.RUSSIAN
          } else {
            adres = ''
          }

          let final = {
            geometry: cord[0],
            properties: {
              balloonContentHeader: this.req.items[i].title.RUSSIAN,
              balloonContentBody: '<img src="' + this.req.items[i].url + '" height="150" width="200"> <br/> ' + '<a>Телефон: ' + phone + '</a><br/>'+ '<p>Сайт: </p><a href="'+site+'">' + site + '</a><br/>',
              balloonContentFooter: adres
            },
            options: {
              preset: 'islands#circleIcon',
              iconColor: this.req.items[i].color,
            },
          }
          this.pointCords.push(final)


        } else {
          for (j = 0; j < this.req.items[i].coords[0].length; ++j) {
            cord.push([this.req.items[i].coords[0][j].latitude, this.req.items[i].coords[0][j].longitude])
          }

          var adres
          if (this.req.items[i].address.RUSSIAN != 'Имеется') {
            adres = this.req.items[i].address.RUSSIAN
          } else {
            adres = ''
          }

          let final = {
            feature: {
              geometry: {
                type: this.req.items[i].visualType,
                coordinates: [cord],
                fillRule: 'nonZero',
              },
              properties: {
                balloonContentHeader: this.req.items[i].title.RUSSIAN,
                balloonContentBody: '<img src="' + this.req.items[i].url + '" height="150" width="200"> <br/> ' + '<a>Телефон' + phone + '</a><br/>'+ '<p>Сайт: </p><a href="'+site+'">' + site + '</a><br/>',
                balloonContentFooter: adres
              },
            },
            options: {
              fillColor: this.req.items[i].color,
              strokeColor: this.req.items[i].color,
              opacity: 0.5,
              strokeWidth: 1,
              strokeStyle: 'solid',
            },
          }
          this.polCords.push(final)
        }
      }
      this.flag = true
    })

  }
}
