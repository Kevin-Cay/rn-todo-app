import React, {useCallback} from 'react'
import { Pressable, Text } from 'react-native'
import { Box, useTheme, themeTools, useColorModeValue, HStack } from 'native-base'
import BouncyCheckbox from "react-native-bouncy-checkbox";

interface Props{
    isDone: boolean,
    onToggleCheckbox?: () => void, 
    
}

const TaskItem = (props: Props) => {
    const {isDone,
        onToggleCheckbox,
    } = props
    const theme = useTheme()
    const highlightColor = themeTools.getColor(
        theme, 
        useColorModeValue("blue.500", "blue.400")
    )
    const boxStroke = themeTools.getColor(
        theme, 
        useColorModeValue("muted.300", "muted.300")
    )
    const checkmarkColor = themeTools.getColor(
        theme, 
        useColorModeValue("white", "white")
    )
    const activeTextColor = themeTools.getColor(
        theme, 
        useColorModeValue("darkText", "lightText")
    )
    const doneTextColor = themeTools.getColor(
        theme, 
        useColorModeValue("muted.500", "muted.600")
    )

    console.log(isDone);
    

    return(
        <HStack
        alignItems="center"
        w="full"
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        >
        <Box 
        width={30}
        height={30}
        mr={2} 
        >
            <Pressable onPress={onToggleCheckbox} >
            <BouncyCheckbox
            size={20}
            fillColor={highlightColor}
            unfillColor="transparent"
            text={"hola mundo"}
            textStyle={{color: `${doneTextColor}`}}
            iconStyle={{ borderColor: "grey", margin: 0 , padding: 0}}    
            isChecked={isDone}
            />
            </Pressable>
        </Box>
    </HStack>
    )

}

export default TaskItem