/* tslint:disable-next-line:no-unused-variable */
import * as React from "react";
import { range } from "ramda";
import { View, ScrollView, Text, TouchableHighlight } from "react-native";
import { ExpandLessIcon } from "../../svg-components/expand-less";
import { ExpandMoreIcon } from "../../svg-components/expand-more";

interface Section {
  header: string | JSX.Element;
  content: JSX.Element;
}

interface Props {
  sections: Section[];
}

interface State {
  selected: boolean[];
}

export class Accordion extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const selected = range(0, props.sections.length).map(() => true);
    this.state = { selected };
  }

  selectSection = (index: number) => {
    let { selected } = this.state;
    selected[index] = !selected[index];
    this.setState(() => ({ selected }));
  };

  render() {
    const { sections } = this.props;
    const { selected } = this.state;
    return (
      <ScrollView
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#e0e0e0",
        }}
      >
        {sections.map((section, key) => (
          <View key={key}>
            <SectionHeader
              text={section.header}
              onPress={() => this.selectSection(key)}
              open={selected[key]}
              firstHighlight={key === 0}
            />
            {selected[key] ? section.content : null}
          </View>
        ))}
      </ScrollView>
    );
  }
}

interface SectionHeaderProps {
  text: string | JSX.Element;
  open: boolean;
  firstHighlight: boolean;
  onPress: () => void;
}

function SectionHeader(props: SectionHeaderProps) {
  const { text, onPress, open, firstHighlight } = props;
  return (
    <TouchableHighlight onPress={onPress} underlayColor={"white"}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderTopWidth: firstHighlight ? 0 : 1,
          borderTopColor: "#e0e0e0",
        }}
      >
        <Text
          style={{
            fontSize: 17,
            color: "#000000",
          }}
        >
          {text}
        </Text>
        <View
          style={{
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {open ? (
            <ExpandLessIcon color={"#676767"} />
          ) : (
            <ExpandMoreIcon color={"#676767"} />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
}
