import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Tornillo, TornilloTableColumnDef } from 'src/app/services/tornillos.service';
import { initTornillos } from 'src/app/stores/tornillos/tornillos.actions';
import { selectTornillos } from 'src/app/stores/tornillos/tornillos.selectors';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-tornillos',
  templateUrl: './tornillos.component.html',
  styleUrls: ['./tornillos.component.scss']
})
export class TornillosComponent implements OnInit, OnDestroy {

  tornillos$ = this.store.select(selectTornillos);
  tornillosSub?: Subscription;
  columns: TornilloTableColumnDef[] = [];
  displayedColumns = [...this.columns.map(c => c.columnDef), 'actions'];
  dataSource: MatTableDataSource<Tornillo> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator?: MatPaginator;



  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(initTornillos());

    this.tornillosSub = this.tornillos$.subscribe(({tornillos, columnOrder}) => {

      this.columns = columnOrder;
      this.displayedColumns =  [...this.columns.map(c => c.columnDef), 'actions'];

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
