import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useStyles } from './CartItemCard.styles';
import Image from 'react-native-fast-image';
import { getColorById, getImagePathById } from 'utils';
import AntDIcon from 'react-native-vector-icons/AntDesign';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'providers/ThemeProvider';

type CartItemCardProps = {
  title: string;
  colorId: string;
  price: string;
  oldPrice?: string;
  quantity: number;
  imageId: string;
};

export const CartItemCard: React.FC<CartItemCardProps> = ({
  title,
  colorId,
  price,
  oldPrice,
  quantity,
  imageId,
}) => {
  const styles = useStyles();
  const theme = useTheme();

  const imageProperties = useMemo(
    () => ({
      id: imageId,
      width: 100,
      height: 100,
    }),
    [imageId]
  );

  const color = useMemo(() => getColorById(colorId), [colorId]);

  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image
          source={{
            uri: getImagePathById(imageProperties),
            priority: Image.priority.normal,
          }}
          resizeMode={Image.resizeMode.contain}
          style={styles.image}
        />
        <View>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.color}>Color: {color}</Text>
          <Text style={styles.price}>{price}</Text>
          {oldPrice && <Text>{oldPrice}</Text>}
        </View>
      </View>
      <View style={styles.buttonsRow}>
        <TouchableOpacity>
          <AntDIcon name="pluscircleo" size={24} color={theme.colors.gray300} />
        </TouchableOpacity>
        <Text style={styles.quantity}>{quantity}</Text>
        <TouchableOpacity>
          <AntDIcon
            name="minuscircleo"
            size={24}
            color={theme.colors.gray300}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.removeButton}>
        <IonIcon name="trash" size={25} color={theme.colors.gray300} />
      </TouchableOpacity>
    </View>
  );
};
