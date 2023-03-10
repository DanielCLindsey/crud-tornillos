import { Component, OnDestroy, OnInit, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Tornillo, TornilloTableColumnDef } from 'src/app/services/tornillos.service';
import { TornillosActions } from 'src/app/stores/tornillos/tornillos.actions';
import { selectTornillos } from 'src/app/stores/tornillos/tornillos.selectors';
import { Subscription, timer } from 'rxjs'
import {MatDialog} from '@angular/material/dialog';
import { CreateTornilloComponent } from '../../dialogs/create-tornillo/create-tornillo.component';
import { DeleteTornilloComponent } from '../../dialogs/delete-tornillo/delete-tornillo.component';
import { ConfigTableComponent } from '../../dialogs/config-table/config-table.component';

@Component({
  selector: 'app-tornillos',
  templateUrl: './tornillos.component.html',
  styleUrls: ['./tornillos.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TornillosComponent implements OnInit, OnDestroy {

  tornillos$ = this.store.select(selectTornillos);
  tornillosSub?: Subscription;
  columns: TornilloTableColumnDef[] = [];
  displayedColumns = [...this.columns.map(c => c.columnDef), 'actions'];
  dataSource: MatTableDataSource<Tornillo> = new MatTableDataSource();

  isLoaded: boolean = false;

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private store: Store, @Optional() public dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(TornillosActions.initializeTornillos());
    this.tornillosSub = this.tornillos$.subscribe(({tornillos, columnOrder}) => {
      timer(1500).subscribe(() => {
        this.columns = columnOrder;
        this.displayedColumns =  [...this.columns.map(c => c.columnDef), 'actions'];

        this.dataSource = new MatTableDataSource(tornillos);
        if(this.paginator){
          this.dataSource.paginator = this.paginator;
          const paginatorIntl = this.paginator._intl;
          paginatorIntl.itemsPerPageLabel = 'Ítems por página';
          paginatorIntl.nextPageLabel = 'Página anterior';
          paginatorIntl.previousPageLabel = 'Página siguiente';
          paginatorIntl.getRangeLabel = this.espRangeLabel;
        }

        this.isLoaded = true;
      })
    })
  }

  ngOnDestroy(): void {
    this.tornillosSub?.unsubscribe();
  }

  createTornillo() {
    this.dialog?.open(CreateTornilloComponent, {
      width: '80vw',
      height: '70vh'
    })
  }

  espRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) {
      return `0 ítems`;
    }

    length = Math.max(length, 0);

    const startIndex = page * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < length
        ? Math.min(startIndex + pageSize, length)
        : startIndex + pageSize;

    const totalPages = Math.floor(length/pageSize) + 1;

    return `${startIndex + 1} - ${endIndex} de ${length} ítems / ${page + 1} de ${totalPages} páginas`;
  };

  deleteTornillo(tornillo: Tornillo) {
    this.dialog?.open(DeleteTornilloComponent, {
      width: '60vw',
      height: '200px',
      panelClass: 'error-dialog',
      data: tornillo
    })
  }

  configTable() {
    this.dialog?.open(ConfigTableComponent, {
      width: '80vw',
      height: '70vh'
    })
  }
}
