'use client';
import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, CircularProgress, Grid } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';
import { PieChart } from '@mui/x-charts/PieChart';
import { ScatterChart } from '@mui/x-charts/ScatterChart';
import { useGetAllMetaDataQuery } from '@/redux/api/metaApi';
import LinearProgress from '@mui/material/LinearProgress';

const UserActivity = () => {
  const { data, isLoading } = useGetAllMetaDataQuery({});
  if (isLoading) {
    <p>Loading ..</p>;
  }

  console.log(data);

  // {
  //   totalLostItems: 14,
  //   totalFoundItems: 4,
  //   totalClaimItems: 4,
  //   totalReunions: 2
  // }

  const settings = {
    width: 250,
    height: 250,
    value: 95,
  };

  const analicesData = [
    { label: 'Total LostItems', value: data?.totalLostItems },
    { label: 'total FoundItems', value: data?.totalFoundItems },
    { label: 'Total Reunions', value: data?.totalClaimItems },
    { label: 'Total ClaimItems', value: data?.totalReunions },
  ];

  const dataItems = [
    { x: 100, y: 200, id: 1 },
    { x: 120, y: 100, id: 2 },
    { x: 170, y: 300, id: 3 },
    { x: 140, y: 250, id: 4 },
    { x: 150, y: 400, id: 5 },
    { x: 110, y: 280, id: 6 },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mx-auto text-center mt-8 ">
        View All Activity
      </h1>
      <hr className="w-48 mx-auto text-center my-2" />
      {isLoading ? (
        <div className="mt-10 mx-auto text-center">
          <CircularProgress color="secondary" />
        </div>
      ) : (
        <div>
          <Grid container spacing={2}>
            <Grid
              item
              xs={12}
              md={6}
              className="flex justify-center items-center"
            >
              <BarChart
                series={[
                  // { data: [35, 44, 24, 34] },
                  // { data: [51, 6, 49, 30] },
                  {
                    data: [
                      data?.totalLostItems,
                      data?.totalFoundItems,
                      data?.totalClaimItems,
                      data?.totalReunions,
                    ],
                  },
                  {
                    data: [
                      data?.totalLostItems,
                      data?.totalFoundItems,
                      data?.totalClaimItems,
                      data?.totalReunions,
                    ],
                  },
                ]}
                height={290}
                xAxis={[
                  {
                    data: [
                      'Total LostItems',
                      'total FoundItems',
                      'Total Reunions',
                      'Total ClaimItems',
                    ],
                    scaleType: 'band',
                  },
                ]}
                margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <div className="flex justify-center items-center flex-col gap-8">
                <Gauge
                  {...settings}
                  cornerRadius="80%"
                  sx={(theme) => ({
                    [`& .${gaugeClasses.valueText}`]: {
                      fontSize: 40,
                    },
                    [`& .${gaugeClasses.valueArc}`]: {
                      fill: '#52b202',
                    },
                    [`& .${gaugeClasses.referenceArc}`]: {
                      fill: theme.palette.text.disabled,
                    },
                  })}
                />
                <h2 className="text-2xl font-bold ">Active Users</h2>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={2} mt={10}>
            <Grid item xs={12} md={6}>
              <div className="flex justify-center items-center flex-col">
                <PieChart
                  series={[
                    {
                      paddingAngle: 5,
                      innerRadius: 60,
                      outerRadius: 80,
                      data: analicesData,
                    },
                  ]}
                  margin={{ right: 5 }}
                  width={500}
                  height={300}
                  legend={{ hidden: true }}
                />
                <h2 className="text-2xl font-bold ">
                  Total Website Activity Data
                </h2>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="flex justify-center items-center flex-col ">
                <ScatterChart
                  width={500}
                  height={300}
                  series={[{ data: dataItems, label: 'pv', id: 'pvId' }]}
                  xAxis={[{ min: 0 }]}
                />
                <h2 className="text-2xl font-bold ">Track data</h2>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default UserActivity;
