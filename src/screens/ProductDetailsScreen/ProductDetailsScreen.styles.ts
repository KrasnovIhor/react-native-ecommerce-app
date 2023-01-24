import { TextStyle } from 'react-native';
import { withTheme } from 'providers/ThemeProvider';
import { WHITE } from 'assets/colors';

export const useStyles = withTheme(
  ({ colors, spaces, fontSize, textStyle }, isDark) => {
    const headingStyle: TextStyle = {
      ...textStyle,
      fontSize: fontSize[4],
      fontWeight: '700',
    };

    return {
      root: {
        flex: 1,
        backgroundColor: colors.background,
        position: 'relative',
      },
      safeAreaContainer: {
        flex: 1,
      },
      container: {
        paddingTop: spaces[6],
        paddingHorizontal: spaces[4],
        paddingBottom: spaces[7],
      },
      headerButtonsRow: {
        display: 'flex',
        flexDirection: 'row',
        width: 75,
        justifyContent: 'space-between',
      },
      text: {
        ...textStyle,
      },
      slider: {
        marginBottom: spaces[5],
      },
      image: {
        width: 250,
        height: 250,
      },
      name: {
        ...textStyle,
        marginBottom: spaces[1],
      },
      nameSection: {
        marginBottom: spaces[3],
      },
      colorSection: {
        marginTop: spaces[1],
        marginBottom: spaces[3],
      },
      sectionHeading: {
        ...headingStyle,
        marginBottom: spaces[1],
      },
      colorButtons: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
      },
      colorButtonText: {
        ...textStyle,
      },
      activeColorButtonText: {
        ...textStyle,
        color: WHITE,
      },
      colorButton: {
        backgroundColor: isDark ? colors.gray700 : colors.gray100,
        paddingHorizontal: spaces[1],
        paddingVertical: spaces[0],
        marginRight: spaces[1],
      },
      activeColorButton: {
        backgroundColor: colors.primary,
      },
      descriptionSection: {
        marginTop: spaces[1],
      },
    };
  }
);
