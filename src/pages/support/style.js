import styled, { css } from "styled-components";
import BasicInput from "../../components/input/BasicInput";
import Checkbox from "../../components/checkbox/Checkbox";

const S = {}

S.FaqWrapper = styled.div`
  width: 100%;
  height: 100vh;
`

S.InquiryWrapper = styled.div`
  width: 100%;
  height: 1920px;
`


S.MenuWrapper = styled.div`
  border-top: 1px solid #B5B5B5;
  border-bottom: 1px solid #B5B5B5;
  display: inline-flex;
  width: 100%;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
`


S.FAQButton = styled.button`
  font-size: ${({ theme }) => theme.FONT_SIZE["body1"]};
  color: ${({ isActive, theme }) => (isActive ? theme.PALLETE.primary.main : theme.PALLETE.text.sub2)};
  border: none;
  background: none;
  
  `

S. BetweenButton = styled.span`
  /* margin-bottom: 39px ; */
  /* margin-top: 39px ; */
  color: #D9D9D9;
  margin-left: 40px;
  margin-right: 40px;
  font-size: 35px;
  ` 

S.InquiryButton = styled.button`
  border: none;
  background: none;
  font-size: ${({ theme }) => theme.FONT_SIZE["body1"]};
  color: ${({ isActive, theme }) => (isActive ? theme.PALLETE.primary.main : theme.PALLETE.text.sub2)};
  `


// faq

S.FAQTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  color: ${({ theme }) => theme.PALLETE.primary.main};
  padding : 80px 0;
  `


S.AccordionWrapper = styled.div`
  margin-bottom: 175px;
  border-top: 3px solid #CF4B05;
`


// inquiry
S.InquiryTitle = styled.div`
  margin-top: 83px;
  display: flex;
  justify-content: center;
  font-size: ${({ theme }) => theme.FONT_SIZE["h4"]};
  color: ${({ theme }) => theme.PALLETE.primary.main};
`

S.InquiryTitleBottom = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 20px;
  color: #777777;
  line-height: ${({ theme }) => theme.LINE_HEIGHT.h5};
`

S.InfoInputWrapper = styled.div`
  margin-top: 117px;
  display: flex;
  flex-direction: column;
  width: 100%;
`

S.InquiryBodyWrapper = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 100%;
 height: 897px;
 margin-top: 117px;
 gap: 42px;
`

S.InputsWrapper = styled.div`
 display: flex;
 align-items: center;
 margin-left: auto;
 width: 700px;
 height: 100%;
 gap: 20px;
`

// 이름

S.InquiryNameWrapper = styled.div`
 display: flex;
 align-items: center;
 width: 960px;
 height: 64px;
`

S.NameInput = styled.div`
 width: 700px;
 margin-left: auto;
`

// 전화번호

S.InquiryPhoneWrapper = styled.div`
 display: flex;
 align-items: center;
 width: 960px;
 height: 64px;
`

S.SelectPhonStart = styled.div`
 width: 220px;
 height: 100%;
`

S.PhoneInput = styled.div`
 width: 220px;
 margin: 0px;
`

// email

S.InquiryEmailWrapper = styled.div`
 display: flex;
 align-items: center;
 width: 960px;
 height: 64px;
`

S.Email = styled.p`
 font-size: 48px;
`

S.EmailSelectBox = styled.div`
 width: 320px;
 height: 100%;
 flex: 0 0 auto;
`

// 문의유형

S.InquiryQuestionCategoryWrapper = styled.div`
 display: flex;
 align-items: center;
 width: 960px;
 height: 64px;
`

S.RadiosWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
width: 700px;
height: 100%;
gap: 20px;

p{
  font-size: ${({ theme }) => theme.FONT_SIZE.body2};
}
`

// 제목

S.InquiryQuestionTitleWrapper = styled.div`
 display: flex;
 align-items: center;
 width: 960px;
 height: 64px;
`

// 내용

S.InquiryQuestionBodyWrapper = styled.div`
 display: flex;
 align-items: center;
 width: 960px;
 height: 230px;
`
S.CharWrapper = styled.div`
 display: flex;
 flex-direction: column;
`

S.QuestionBodyInput = styled(BasicInput)`
 height: 100%;
 vertical-align: top;
`

S.InquiryBody = styled.div`
 width: 700px;
 height: 230px;
`

S.CharCount = styled.div`
  margin-top: 4px;
  text-align: right;
  font-size: 14px;
  color: ${({theme}) => theme.PALLETE.text.main};
`

// 파일

S.InquiryFileWrapper = styled.div`
 display: flex;
 align-items: center;
 width: 960px;
 height: 112px;
`

S.FileWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-left: auto;
width: 700px;
height: 100%;
gap: 4px;

p{
  color: ${({ theme }) => theme.PALLETE.text.sub2}
}
`

S.FileInputButton = styled.div`
 display: flex;
 height: 64px;
`

S.FileInput = styled.div`
width: 535px;
height: 64px;
`

S.InquiryCategory = styled.p`
  font-size: ${({ theme }) => theme.FONT_SIZE["body2"]};
  color: ${({ theme }) => theme.PALLETE.text.sub2};
  display: flex;
  align-items: center;
`


// 버튼

S.InquiryButtonWrapper = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 width: 100%;
 height: 412px;

 div{
  display: flex;
  justify-content: center;
  gap: 60px;
 }
`





export default S;