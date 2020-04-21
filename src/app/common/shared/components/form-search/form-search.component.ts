import { Component, EventEmitter, OnInit, OnDestroy, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-form-search',
  templateUrl: './form-search.component.html',
  styleUrls: ['./form-search.component.scss']
})
export class FormSearchComponent implements OnInit, OnDestroy {

  @Output()
  public formChange = new EventEmitter<string>();

  public searchForm: FormGroup;

  private subsink: SubSink = new SubSink();

  constructor(private formBuilder: FormBuilder) { }

  public ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });

    this.subsink.sink = this.searchForm.controls.search.valueChanges.subscribe(value => this.formChange.emit(value));
  }

  public ngOnDestroy() {
    this.subsink.unsubscribe();
  }
}
