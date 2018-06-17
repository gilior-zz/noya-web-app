import * as tedious from 'tedious'
import {DataResponse} from "../src/app/dal/models";
import {Request, Response} from "express";
import {DBConfig} from "./config";


function requestGenerator(proc: string, lang: string) {
  console.log(lang)
  let request = new tedious.Request(proc, function (err: Error, rowCount: number, rows: any[]) {
    if (err) {
      console.log(err);
    }
  });
  request.addParameter('lang', tedious.TYPES.NVarChar, lang);
  return request;
}

function handleRowEvent<T>(columns: any[], dataResponse: DataResponse) {
  let obj: T = Object.create(Object.prototype);
  columns.forEach(i => {
    let metadata: tedious.ColumnMetaData = i.metadata;
    let value: any = i.value;
    obj[metadata.colName] = value;
  })
  dataResponse.items.push(obj);
}

function executeStatement<T>(dataResponse: DataResponse, proc: string, req: Request, res: Response, connection: tedious.Connection) {

  let request = requestGenerator(proc, res.locals.lang);
  request.on('row', function (columns: any[]) {
    handleRowEvent<T>(columns, dataResponse);
  });
  request.on('doneInProc', function (rowCount, more, rows) {
    console.log('doneInProc')
    res.status(200).json(dataResponse);
  });
  connection.callProcedure(request);
}

export function callDB<T>(req: Request, res: Response, proc: string) {
  let dataResponse: DataResponse = {items: []};
  let Connection = tedious.Connection;
  let connection = new Connection(DBConfig);
  connection.on('connect', function (err) {
      // If no error, then good to go...
      executeStatement<T>(dataResponse, proc, req, res, connection);
    }
  );
}
