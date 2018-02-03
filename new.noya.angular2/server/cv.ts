import {Express, Request, Response} from "express";
import * as tedious from 'tedious'
import {CV, CVResponse, HomePageText, HomePageTextResponse, SqlLanguage} from "../src/app/dal/models";


export function handlCVRoutes(req: Request, res: Response) {
  let result: CVResponse = {items: []}
  let Connection = tedious.Connection;

  let config = {
    userName: 'lior',
    password: 'lM8%px35',
    server: '188.121.44.212',

    // If you're on Windows Azure, you will need this:
    options: {encrypt: true}
  };

  let Request = require('tedious').Request;

  function executeStatement() {
    let request = new Request("CVSelect", function (err: Error, rowCount: number, rows: any[]) {
      if (err) {
        console.log(err);
      } else {
        // console.log(rowCount + ' rows');
        // res.status(200).json({rows})
      }
    });
    request.addParameter('lang', tedious.TYPES.NVarChar, SqlLanguage[req.body.request.Language]);
    request.on('row', function (columns: any[]) {
      let obj: CV = {Text: '', ID: -1, TimeStamp: new Date()}
      columns.forEach(i => {
        let metadata: tedious.ColumnMetaData = i.metadata;
        let value: any = i.value;
        obj[metadata.colName] = value;
        result.items.push(obj);
        // console.log('columns', columns)

      })
    });
    request.on('doneInProc', function (rowCount, more, rows) {
      console.log('rowCount', rowCount)
      console.log('more', more)
      console.log('rows', rows)
      console.log('resault', result)
      res.status(200).json(result);
    });


    connection.callProcedure(request);
  }

  let connection = new Connection(config);

  connection.on('connect', function (err) {
      // If no error, then good to go...
      executeStatement();
    }
  );

  // var TYPES = require('tedious').TYPES;
  //
  // var request = new Request('get_addresses', function(err) {
  //
  // });

  // request.addParameter('name', TYPES.VarChar, 'Fred');
  // request.addParameter('age', TYPES.Int, 42);

  // connection.callProcedure(request);


}


