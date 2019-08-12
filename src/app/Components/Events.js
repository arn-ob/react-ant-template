import React, { Fragment } from 'react';
import 'antd/dist/antd.css';
import { Card, Col, Row } from 'antd';


function Events() {
    return (
        <Fragment>
            <div style={{ background: '#fbfbfb', padding: '30px' }}>
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Event 1
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Event 2
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Card title" bordered={false}>
                            Event 3
                        </Card>
                    </Col>
                </Row>
            </div>
        </Fragment>
    )
}


export default Events