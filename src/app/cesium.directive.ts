import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const viewer = new Cesium.Viewer(this.el.nativeElement, {
      sceneMode: Cesium.SceneMode.SCENE2D,
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      homeButton: false,
      infoBox: false,
      sceneModePicker: false,
      geocoder: false,
      timeline: false,
      selectionIndicator: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      clockViewModel: null,
      imageryProvider: new Cesium.WebMapTileServiceImageryProvider({
        url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer/WMTS/tile/1.0.0/USGSTopo/{Style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}',
        layer: 'USGSTopo',
        style: 'default',
        format: 'image/jpeg',
        tileMatrixSetID: 'default028mm',
        // tileMatrixLabels : ['default028mm:0', 'default028mm:1', 'default028mm:2' ...],
      })
    });
  }

}
