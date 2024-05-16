import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  studentArr:any[] =[];
  student:any={
    studentId:0,
    name:'',
    email:'',
    department:''
  };
  constructor(){ }
  ngOnInit():  void{  
    const localData = localStorage.getItem('studentList');
    if(localData != null){
      this.studentArr = JSON.parse(localData);
    }
  }

  onAddStudent(){
    const notNull=document.getElementById('studentmodel');
    if(notNull !== null){
      notNull.style.display ='block';
    }
    this.student={
      studentId:0,
      Name:'',
      email:'',
      department:''
    }; 
  }

  onCloseModal(){
    const notNull=document.getElementById('studentmodel');
    if(notNull !== null){
      notNull.style.display ='none';
    }
  }

  onEdit(stud:any){
    this.onAddStudent();
    this.student = stud;
  }
  onDelete(id:number){
    for(let i=0; i < this.studentArr.length; i++){
      if(this.studentArr[i].studentId == id){
        this.studentArr.splice(i,1); 
      }
    }
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
    
  }
  
  saveStudent(data:any){
    this.student.studentId = this.studentArr.length + 1;
    this.studentArr.push(this.student);
    this.onCloseModal(); 
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
    this.student={
      studentId:0,
      Name:'',
      email:'',
      department:''
    };   
  }
  onUpdate(){
    const record = this.studentArr.find(m =>m.studentId == this.student.studentId);
    record.name = this.student.name;
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
    this.onCloseModal();
  }

}
