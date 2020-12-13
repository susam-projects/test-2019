import { Button } from "@ui/button";
import { Input } from "@ui/input";
import { RouteLink } from "@ui/link";
import React, { FC } from 'react'
import { Column, Layout, Row } from '@ui/layout'
import { Text } from '@ui/text'
import { InjectedIntl, injectIntl } from "react-intl";
import messages from "../../messages";

interface Props {
  defaultProfile?: any
  intl: InjectedIntl
}

const ProfileDesktop: FC<Props> = ({
  defaultProfile,
  firstName,
  lastName,
  errors,
  onSave,
  onCancel,
  onChangeFirstName,
  onChangeLastName,
  intl,
}) => {
  if (firstName === undefined && defaultProfile && defaultProfile.firstName) {
    queueMicrotask(() => {
      onChangeFirstName(defaultProfile.firstName)
    })
  }
  if (lastName === undefined && defaultProfile && defaultProfile.lastName) {
    queueMicrotask(() => {
      onChangeLastName(defaultProfile.lastName)
    })
  }

  return (
    <Column>
      <Layout basis={60} />
      <Row>
        <Layout basis='10%' />
        <Text weight='medium' size='l'>
          {`${firstName} ${lastName}`}
        </Text>
        <Layout basis='10%' />
      </Row>
      <Layout basis={20} />
      <Row>
        <Layout basis='10%' />
        <Text weight='bold' size='s' transform='uppercase'>
          {intl.formatMessage(messages.firstName)}
        </Text>
        <Layout basis='10%' />
      </Row>
      <Layout basis={12} />
      <Row>
        <Layout basis='10%' />
        <Input
          border='lightGray'
          error={errors.firstName}
          value={firstName || ''}
          onChange={onChangeFirstName}
          placeholder={intl.formatMessage(messages.firstNamePlaceholder)}
        />
        <Layout basis='10%' />
      </Row>
      <Layout basis={12} />
      <Row>
        <Layout basis='10%' />
        <Text weight='bold' size='s' transform='uppercase'>
          {intl.formatMessage(messages.lastName)}
        </Text>
        <Layout basis='10%' />
      </Row>
      <Layout basis={12} />
      <Row>
        <Layout basis='10%' />
        <Input
          border='lightGray'
          error={errors.lastName}
          value={lastName || ''}
          onChange={onChangeLastName}
          placeholder={intl.formatMessage(messages.lastNamePlaceholder)}
        />
        <Layout basis='10%' />
      </Row>
      <Layout basis={24} />
      <Row>
        <Layout basis='10%' />
        <Layout basis={200}>
          <Button text onClick={onSave}>
            Сохранить изменения
          </Button>
        </Layout>
        <Layout basis={24} />
        <Layout basis={100} align='center'>
          <RouteLink
            to='/'
            size='s'
            height='xs'
            weight='medium'
            color='black'
            hoverColor='blueBayoux'
            onClick={onCancel}
          >
            Отменить
          </RouteLink>
        </Layout>
      </Row>
    </Column>
  )
}

export default injectIntl(ProfileDesktop)
