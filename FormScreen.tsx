import React from 'react';
import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import styled from 'styled-components/native';
import styles from './style';
import LinearGradient from 'react-native-linear-gradient';
const FormContainer = styled.View`
  flex: 1;
  padding: 20px;
  justify-content: center;
`;

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is required')
    .matches(/^[A-Za-z\s]*$/, 'Name must contain only letters'),
  email: yup.string().email('Invalid email').required('Email is required'),
});

type FormData = yup.InferType<typeof schema>;

export const FormScreen = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <LinearGradient
      colors={['#fa9e69', '#fddb86', '#edf680']}
      style={styles.linearGradient}>
      <FormContainer>
        <View style={styles.container}>
          <Text style={styles.inputheading}>Name:</Text>
          <Controller
            control={control}
            name="name"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.inputbox}
                placeholder="Enter your name"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.name && (
            <Text style={styles.inputerror}>{errors.name.message}</Text>
          )}

          <Text style={styles.inputheading}>Email:</Text>
          <Controller
            control={control}
            name="email"
            render={({field: {onChange, onBlur, value}}) => (
              <TextInput
                style={styles.inputbox}
                placeholder="Enter your email"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors.email && (
            <Text style={styles.inputerror}>{errors.email.message}</Text>
          )}

          <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={styles.btnSubmit}>
            <Text style={styles.txtSubmit}>Submit</Text>
          </TouchableOpacity>
        </View>
      </FormContainer>
    </LinearGradient>
  );
};
