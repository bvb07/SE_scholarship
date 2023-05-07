import { Chart, ChartSeries, ChartSeriesItem, ChartTitle ,ChartCategoryAxis, ChartCategoryAxisItem} from '@progress/kendo-react-charts';
import '@progress/kendo-theme-default/dist/all.css';
import axios from "axios";
import React, { Component, useState, useEffect } from "react";

import './Chart_Form.css';



const Chart_Form = (props)=>{
    const {chart_title,chart_x,chart_y1,chart_y2,chart_detail1,chart_detail2} = props
    const [getYearScholarDB,setGetYearScholarDB] = useState([])
    useEffect(function useSetGetYearScholarDB(){ ////new!
        axios.get("http://127.0.0.1:8000/AcademicYear/").then((response)=>{
          setGetYearScholarDB(response.data);
        }
        ,(err)=>{
          alert("ไม่สามารถดึงปีการศึกษา")
        }
        );
      },[]) 
    return (
        <div >
            <div className='mt-2'>{chart_title}</div>
            <div>
            
                <Chart style={{ height: '17rem' }}>
                    <ChartCategoryAxis>
                        <ChartCategoryAxisItem categories={chart_x}/>
                    </ChartCategoryAxis>
                    <ChartSeries>
                        <ChartSeriesItem data={chart_y1} name={chart_detail1} />
                        <ChartSeriesItem data={chart_y2} name={chart_detail2} />
                    </ChartSeries>
                </Chart>
            </div>
        </div>
        
        
    );
}

export default Chart_Form
