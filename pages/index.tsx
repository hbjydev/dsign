import * as React from 'react';
import { Container, Button } from '..';

export default () => {
    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center', padding: '2rem 0', borderBottom: '1px solid var(--accent-1)' }}>
                <div className="left" style={{ width: '100%' }}>
                    <h1>React UI made easy.</h1>
                    <p>Dsign is a modern UI framework built for React, designed to help ease your development cycle.</p>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%'
                    }}>
                        <Button color="success" filled shadow>
                            Get Started
                        </Button>
                    </div>
                </div>
                <div className="right" style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '2rem'
                }}>
                    <img
                        src="https://assets.zeit.co/image/upload/v1583250191/front/home/new/acme.svg"
                        style={{ width: '100%' }} />
                </div>
            </div>
        </Container>
    );
}
