import React, { useState } from 'react'
import Volumes from '../../Model/Volume';
import _ from "lodash"

const VolumePage = () => {
    const [text, setText] = useState(0.0);

    const controller = new Volumes();

    return (
        <Page tite="Volume">
            <ListItem>
                <Picker type="dropdown" items={controller.units} />
                <TextField alignment="left" setter={setText}>{text}</TextField>
            </ListItem>
            {controller.units.map(e, idx => {
                <ListItem id={idx}>
                    <Text type="primary">{_.replace(_.startCase(e), "-", " ")}</Text>
                    <Text type="secondary">{controller.getValue(e)}.</Text>
                </ListItem>
            })}
        </Page>
    )
}

export default VolumePage