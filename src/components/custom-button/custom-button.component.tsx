import React from 'react'
import { CustomButtonContainer } from './custom-button.styles'

interface CustomButtonProps {
  inverted: boolean
  onClick: () => void
}
const CustomButton: React.FC<CustomButtonProps> = ({ children, inverted }) => (
  <CustomButtonContainer inverted={inverted}>{children}</CustomButtonContainer>
)

export default CustomButton
