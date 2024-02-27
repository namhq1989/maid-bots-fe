import React from 'react'
import { HttpError, IResourceComponentsProps, useList } from '@refinedev/core'
import { Card, Col, Row, Statistic } from 'antd'
import { List } from '@refinedev/antd'

export const MonitorList: React.FC<IResourceComponentsProps> = () => {
  const { data, isLoading, isError } = useList<IMonitor, HttpError>({
    resource: 'monitors',
  })

  const monitors = data?.data ?? []

  return (
    <List>
      <Row gutter={16}>
        {monitors.map((monitor) => {
          return (
            <Col key={monitor.code} span={4}>
              <Card title={monitor.type.toUpperCase()} bordered={false}>
                <Row gutter={[16, 16]}>
                  <Col span={12}>
                    <Statistic
                      title='Performance'
                      value='890 ms'
                      valueStyle={{ fontSize: 20.0 }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title='Uptime'
                      value='100 %'
                      valueStyle={{ fontSize: 20.0 }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title='Last checked'
                      value='30s ago'
                      valueStyle={{ fontSize: 20.0 }}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title='Last issue'
                      value='-'
                      valueStyle={{ fontSize: 20.0 }}
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          )
        })}
      </Row>
    </List>
    // <List>
    //   <Table {...tableProps} rowKey='code'>
    //     <Table.Column dataIndex='code' title='ID' />
    //     <Table.Column dataIndex='type' title='TYPE' />
    //     <Table.Column dataIndex='target' title='TARGET' />
    //     <Table.Column
    //       dataIndex='interval'
    //       title='INTERVAL'
    //       render={(value: number) => `${value} seconds`}
    //     />
    //     <Table.Column
    //       dataIndex='createdAt'
    //       title='CREATED AT'
    //       render={(value: Date) => (
    //         <DateField value={value} format='DD/MM/YYYY' />
    //       )}
    //     />
    //   </Table>
    // </List>
  )
}

interface IMonitor {
  code: string
  type: string
  target: string
  interval: number
  createdAt: Date
}
