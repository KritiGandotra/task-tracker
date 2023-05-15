//it is similar to a class
//we are exporting it so we can bring it into other files

export interface Task{
    //id is option hence ?
    //cause the task will not have an id under we save it in the json server
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
}