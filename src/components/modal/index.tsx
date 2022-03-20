import React, {FC} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

interface ModalScreenProps {
  icon: JSX.Element;
  title: string;
  text?: string;
  buttons: JSX.Element[];
}

export const ModalScreen: FC<ModalScreenProps> = ({
  icon,
  title,
  text,
  buttons,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.icon}>{icon}</View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {text && <Text style={styles.body}>{text}</Text>}
        </View>
        <View style={styles.buttonsContainer}>{buttons.map(btn => btn)}</View>
      </View>
    </View>
  );
};
