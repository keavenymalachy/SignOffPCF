import { Avatar, Label, Switch, SwitchOnChangeData, teamsLightTheme } from '@fluentui/react-components'
import { FluentProvider } from '@fluentui/react-components'
import * as React from 'react'
import { useEffect, useState } from 'react'

export interface MySwitchProps {
    textFieldSLOT: string | null
    currentUserFullName: string
    currentUserImg: string
    onSwitchChange: (input: string | null) => void
}

const MySwitch = ({ textFieldSLOT, currentUserFullName, currentUserImg, onSwitchChange }: MySwitchProps) => {

    const [info, setInfo] = useState<string[] | null>(null)

    useEffect(() => { 

        console.log("thurs TEST")
        
        if (textFieldSLOT !== null) {
            setInfo(textFieldSLOT.split(','));
        }
    }, [])

    const onChange = (ev: React.ChangeEvent<HTMLInputElement>, { checked }: SwitchOnChangeData): void => {

        

        let switchChecked: boolean = !!checked;
        // onSwitchChange(checked ? 'on' : undefined)
        if (switchChecked) {
            const date = new Date();
            let day = date.getDate();
            let month = date.getMonth();
            let year = date.getFullYear();
            let hour = date.getHours();
            let minute = date.getMinutes();

            onSwitchChange(`${currentUserFullName}, ${currentUserImg}, ${day}/${month}/${year} @ ${hour}:${minute}`)
        } else {
            onSwitchChange(null)
        }
    }



    useEffect(() => {

    }, [textFieldSLOT])

    return (
        <FluentProvider theme={teamsLightTheme}>
            <Switch label={textFieldSLOT} checked={textFieldSLOT !== null} onChange={onChange} />
            {info !== null && 
            <>
            <Avatar name={info![0]} image={{ src: info![1] }} />
            <Label>{info![2]}</Label>
            </>
            
            }
            
        </FluentProvider>
    )
}

export default MySwitch
