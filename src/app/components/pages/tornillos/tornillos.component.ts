import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Tornillo } from 'src/app/services/tornillos.service';
import { initTornillos, updateTornillos } from 'src/app/stores/tornillos/tornillos.actions';
import { selectTornillosList } from 'src/app/stores/tornillos/tornillos.selectors';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-tornillos',
  templateUrl: './tornillos.component.html',
  styleUrls: ['./tornillos.component.scss']
})
export class TornillosComponent implements OnInit, OnDestroy {

  tornillos$ = this.store.select(selectTornillosList);
  tornillosSub?: Subscription;
  columns = [
    {
      columnDef: 'name',
      header: 'Nombre',
      cell: (element: Tornillo) => `${element.name}`,
    },
    {
      columnDef: 'price',
      header: 'Precio',
      cell: (element: Tornillo) => `${element.price}`,
    },
    {
      columnDef: 'format',
      header: 'Formato',
      cell: (element: Tornillo) => `${element.format}`,
    },
    {
      columnDef: 'brand',
      header: 'Marca',
      cell: (element: Tornillo) => `${element.brand}`,
    }
  ];
  displayedColumns = [...this.columns.map(c => c.columnDef), 'actions'];
  dataSource: MatTableDataSource<Tornillo> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator?: MatPaginator;



  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(initTornillos());

    this.tornillosSub = this.tornillos$.subscribe((tornillos) => {
      this.dataSource = new MatTableDataSource(tornillos);

      if(this.paginator){
        this.dataSource.paginator = this.paginator;
      }
    })
  }

  ngOnDestroy(): void {
    this.tornillosSub?.unsubscribe();
  }
}
