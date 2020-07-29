import React from 'react';
import Modal from 'react-native-modal';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Container, Content, Button, Radio, Footer} from 'native-base';
import HeaderX from '../../../../components/headerX';
import {
  ACTIVE_BLUE,
  font_sm,
  MAIN_GRAY,
  font_xs,
} from '../../../../config/global-styles';
import {CheckBox} from 'react-native-elements';
import {Input} from '../../../../components/input';
import TextField from '../../../../components/text-field';

// import {} from 'react-native-gesture-handler';

interface FormProps {
  isModalVisible?: boolean;
  onBackButtonPress?: () => void;
  isFormComplete: any;
  title: string | string;
  merchandisingForm?: any;
  auditForm?: any;
  isFormFilled?: (boolean) => void;
}

const FormX = (props: FormProps) => {
  const [title, setTitle] = React.useState<string | undefined>();
  const [formData, setFormData] = React.useState<[] | undefined | any>();
  const [controls, setControls] = React.useState<[] | undefined | any>();
  const [pressButton, setPressButton] = React.useState<boolean>(false);
  const [selected, setSelected] = React.useState<boolean | undefined | any>(
    undefined,
  );
  const [formFlledData, setFormFlledData] = React.useState<
    [] | undefined | any
  >([]);
  const [selectedEmoji, setSelectedEmoji] = React.useState('');
  const [selectedCheckBox, setSelectedCheckBox] = React.useState<
    boolean | undefined
  >();
  const [sendableCheckBox, setSendableCheckBox] = React.useState<
    [] | undefined | '' | any
  >([]);
  const [sendableCheckBoxId, setSendableCheckBoxId] = React.useState<any>();
  const [ratingId, setRatingId] = React.useState<any>();
  const [auditForm, setauditForm] = React.useState<any>();

  React.useEffect(() => {
    setTitle(fakeAuditFormData.title);
    setControls(fakeAuditFormData.controls);
  }, []);
  const [radioButtonId, setRadioButtonId] = React.useState<any>();
  React.useEffect(() => {
    setTitle(fakeAuditFormData.title);
    setControls(fakeAuditFormData.controls);
  }, []);

  return (
    <Modal
      isVisible={props.isModalVisible}
      //   swipeDirection={['up', 'down']}
      onSwipeComplete={props.onBackButtonPress}
      onBackButtonPress={props.onBackButtonPress}>
      <Container>
        <HeaderX title={props.title} onPress={props.onBackButtonPress} />
        {props.title && props.title.trim() === 'Store Daily Audit' && (
          <Content>
            {fakeAuditFormData.controls.map((data, i) => (
              <View style={styles.wrapper} key={i}>
                {data.type === 'yes_no' && (
                  <View>
                    <Text style={styles.title}>{data.settings[0].value}</Text>

                    {data.settings.map(
                      (e, i) =>
                        e.name === 'yes_label' && (
                          <Yes_No_Button
                            onPress={() => {}}
                            selected={(boolean) => {
                              let id = data.id;
                              formFlledData.length <= 2 &&
                                setFormFlledData({
                                  ...formFlledData,
                                  [id]: boolean,
                                });

                              setSelected(boolean);
                            }}
                          />
                        ),
                    )}
                  </View>
                )}
                {data.type === 'ratingv2' && (
                  <View>
                    <Text style={styles.title}>{data.settings[1].value}</Text>

                    <View style={{}}>
                      <Rating
                        onPress={(val, id) => {
                          setRatingId({[id]: val});
                          // alert(JSON.stringify(ratingId));
                          // alert(JSON.stringify(val));
                          //   setSelectedEmoji(e.)
                        }}
                      />
                    </View>
                  </View>
                )}
                {data.type === 'checkbox_group' && (
                  <View style={{width: '100%'}}>
                    <Text style={styles.title}>{data.settings[0].value}</Text>

                    <CheckBoxy
                      sendableData={(val, id) => {
                        sendableCheckBox.length <= 2 &&
                          setSendableCheckBox((old) => [...old, val]);
                        setSendableCheckBoxId({[id]: String(sendableCheckBox)});
                        //   alert(JSON.stringify(sendableCheckBoxId));
                      }}
                    />
                  </View>
                )}
                {data.type === 'radio_button_group' && (
                  <View style={{width: '100%'}}>
                    <Text style={styles.title}>{data.settings[0].value}</Text>
                    <RadioBUttonGroup
                      onPress={(val, id) => {
                        setRadioButtonId({[id]: val});
                        //   alert(JSON.stringify(radioButtonId));
                        let parentId = 'a7d16744-3b2c-48cf-8ee9-b8ca60466d4c';
                        props.auditForm({
                          'a7d16744-3b2c-48cf-8ee9-b8ca60466d4c': {
                            '25b1c4bb-bed5-464b-b9af-14a481177088': 'false',
                            '774f2071-0704-455a-9d47-805838904d63': 'true',
                            '9aacf9cb-e667-4209-b3ef-a0103b8a0693': 'false',
                            '8e891d3b-ab20-4876-b9a3-0cc5ae6fdccc': '1',
                            'd40a1116-6100-4210-bec7-c87e8421b341':
                              '[true,false,false]',
                            '4d2c0d0f-db6f-41ea-8675-89b66f7fb527': '0',
                          },
                        });
                      }}
                    />
                  </View>
                )}
              </View>
            ))}
          </Content>
        )}
        {props.title && props.title.trim() === 'Printer Troubleshooting' && (
          <Content>
            <View>
              {fakePrinterTroubleShootData.controls.map((data) => (
                <View style={styles.wrapper}>
                  {data.type === 'radio_button_group' && (
                    <View>
                      <Text style={styles.title}>{data.settings[0].value}</Text>
                      <RadioBUttonGroup
                        title={'Printer Troubleshooting'}
                        onPress={(val, id) => {
                          setRadioButtonId({[id]: val});
                          props.merchandisingForm({
                            '9a99ff76-f6ce-448a-bf38-2e1f5d1ffbd6': {
                              'd3eccb06-8d71-49be-b85b-fea83a0cabdf': '0',
                              '1a67f2bc-f5c2-4d42-b8ae-be8b932a877c': '1',
                              '3b4a94e8-aad5-48a5-bdd2-d437afa8b2a7': '1',
                            },
                          });
                        }}
                      />
                    </View>
                  )}
                </View>
              ))}
            </View>
          </Content>
        )}
        {props.title && props.title.trim() === 'Inventory check' && (
          <Content>
            <View>
              {fakeInventoryCheckData.controls.map((data) => (
                <View style={styles.wrapper}>
                  <Text style={styles.title}>{data.settings[0].value}</Text>
                  <InputX />
                </View>
              ))}
            </View>
          </Content>
        )}

        <Footer
          style={{
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-end',
              width: '100%',
              paddingRight: 30,
              paddingTop: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'transparent',

                width: 80,
                justifyContent: 'center',
              }}
              onPress={props.onBackButtonPress}>
              <Text>Cancel</Text>
            </TouchableOpacity>
            <Button
              onPress={() => {
                props.isFormComplete(auditForm);
                props.isFormFilled(true);
                props.onBackButtonPress();
              }}
              style={{
                backgroundColor: ACTIVE_BLUE,
                width: 80,
                justifyContent: 'center',
              }}>
              <Text style={{color: '#FFF'}}>Submit</Text>
            </Button>
          </View>
        </Footer>
      </Container>
    </Modal>
  );
};
export default FormX;

export const InputX = () => {
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderBottomWidth: 1,
        }}
        onChangeText={(text) => setTextInputValue(text)}
        value={textInputValue}
        placeholder=""
      />
    </View>
  );
};
export const RadioBUttonGroup = (props) => {
  const [selectedOne, setSelectedOne] = React.useState(false);
  const [selectedTwo, setSelectedTwo] = React.useState(false);
  const [selectedThree, setSelectedThree] = React.useState(false);

  return (
    <View>
      {props.title === 'Printer Troubleshooting' ? (
        <View>
          <TouchableOpacity
            onPress={() => {
              props.onPress(0, '4d2c0d0f-db6f-41ea-8675-89b66f7fb527');
              setSelectedOne(true);
              setSelectedTwo(false);
              setSelectedThree(false);
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 10,
              }}>
              <Radio selected={selectedOne}></Radio>

              <Text
                style={{fontSize: font_xs, color: MAIN_GRAY, paddingLeft: 10}}>
                Yes
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.onPress(1, '4d2c0d0f-db6f-41ea-8675-89b66f7fb527');
              setSelectedOne(false);
              setSelectedTwo(true);
              setSelectedThree(false);
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 10,
              }}>
              <Radio selected={selectedTwo}></Radio>
              <Text
                style={{fontSize: font_xs, color: MAIN_GRAY, paddingLeft: 10}}>
                No
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              props.onPress(0, '4d2c0d0f-db6f-41ea-8675-89b66f7fb527');
              setSelectedOne(true);
              setSelectedTwo(false);
              setSelectedThree(false);
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 10,
              }}>
              <Radio selected={selectedOne}></Radio>

              <Text
                style={{fontSize: font_xs, color: MAIN_GRAY, paddingLeft: 10}}>
                Price Tag Updated
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.onPress(1, '4d2c0d0f-db6f-41ea-8675-89b66f7fb527');
              setSelectedOne(false);
              setSelectedTwo(true);
              setSelectedThree(false);
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 10,
              }}>
              <Radio selected={selectedTwo}></Radio>
              <Text
                style={{fontSize: font_xs, color: MAIN_GRAY, paddingLeft: 10}}>
                Complete, needs revisions
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.onPress(2, '4d2c0d0f-db6f-41ea-8675-89b66f7fb527');
              setSelectedOne(false);
              setSelectedTwo(false);
              setSelectedThree(true);
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                padding: 10,
              }}>
              <Radio selected={selectedThree}></Radio>
              <Text
                style={{fontSize: font_xs, color: MAIN_GRAY, paddingLeft: 10}}>
                Not complete
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
export const CheckBoxy = (props) => {
  const [sendableData, setSendableData] = React.useState<
    [] | undefined | '' | any
  >();
  const [
    selectedCheckBoxDisinfection,
    setSelectedCheckBoxDisinfection,
  ] = React.useState(false);
  const [
    selectedCheckBoxSteamcleaning,
    setSelectedCheckBoxSteamcleaning,
  ] = React.useState(false);
  const [
    selectedCheckBoxWeeklycleaning,
    setSelectedCheckBoxcleaning,
  ] = React.useState(false);

  return (
    <View>
      <View
        style={{
          justifyContent: 'flex-start',
          width: '100%',
        }}>
        <CheckBox
          containerStyle={{width: '80%'}}
          title={'Disinfection'}
          checked={selectedCheckBoxDisinfection}
          onPress={() => {
            setSelectedCheckBoxDisinfection(!selectedCheckBoxDisinfection);
            props.sendableData(
              !selectedCheckBoxDisinfection,
              'd40a1116-6100-4210-bec7-c87e8421b341',
            );
          }}
        />
        <CheckBox
          containerStyle={{width: '80%'}}
          title={'Steam cleaning'}
          checked={selectedCheckBoxSteamcleaning}
          onPress={() => {
            setSelectedCheckBoxSteamcleaning(!selectedCheckBoxSteamcleaning);
            props.sendableData(
              !selectedCheckBoxSteamcleaning,
              'd40a1116-6100-4210-bec7-c87e8421b341',
            );
          }}
        />
        <CheckBox
          containerStyle={{width: '80%'}}
          title={'Weekly cleaning '}
          checked={selectedCheckBoxWeeklycleaning}
          onPress={() => {
            setSelectedCheckBoxcleaning(!selectedCheckBoxWeeklycleaning);
            props.sendableData(
              !selectedCheckBoxWeeklycleaning,
              'd40a1116-6100-4210-bec7-c87e8421b341',
            );
          }}
        />
      </View>
    </View>
  );
};
export const Rating = (props) => {
  const [selected, setSelected] = React.useState<any>();
  const [isNoselected, setNoSelected] = React.useState<any>(false);
  const [isSomewhatselected, setSomewhat] = React.useState<any>(false);
  const [isGreatselected, setGreat] = React.useState<any>(false);

  const emoji = () => {
    switch (props.title) {
      case 'No ':
        return {val: 0, emoji: '😔'};
      case 'Somewhat ':
        return {val: 1, emoji: '😐'};
      case 'Yes, its great ':
        return {val: 2, emoji: '🙂'};
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingTop: 10,
      }}>
      <TouchableOpacity
        onPress={() => {
          props.onPress(0, '8e891d3b-ab20-4876-b9a3-0cc5ae6fdccc');
          setNoSelected(true);
          setSomewhat(false);
          setGreat(false);
        }}>
        <View
          style={{
            alignItems: 'center',
            padding: 5,
          }}>
          <Text>😔</Text>
          <Text
            style={{
              fontSize: font_xs,
              color: isNoselected ? ACTIVE_BLUE : MAIN_GRAY,
            }}>
            No
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.onPress(1, 'd40a1116-6100-4210-bec7-c87e8421b341');
          setNoSelected(false);
          setSomewhat(true);
          setGreat(false);
        }}>
        <View
          style={{
            alignItems: 'center',
            padding: 5,
          }}>
          <Text>😐</Text>
          <Text
            style={{
              fontSize: font_xs,
              color: isSomewhatselected ? ACTIVE_BLUE : MAIN_GRAY,
            }}>
            Somewhat
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          props.onPress(2, 'd40a1116-6100-4210-bec7-c87e8421b341');
          setNoSelected(false);
          setSomewhat(false);
          setGreat(true);
        }}>
        <View
          style={{
            alignItems: 'center',
            padding: 5,
          }}>
          <Text>🙂</Text>
          <Text
            style={{
              fontSize: font_xs,
              color: isGreatselected ? ACTIVE_BLUE : MAIN_GRAY,
            }}>
            Yes, its great
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Yes_No_Button = (props) => {
  //   const [selectedId, setSelectedId] = React.useState(props.id);
  const [pressedYes, setPressedYes] = React.useState(false);
  const [pressedNo, setPressedNo] = React.useState(false);

  //   const [data, setData] = React.useState(props.injectData);

  const _yesSelected = () => {
    props.onPress();
    props.selected(true);
    setPressedYes(true);
    setPressedNo(false);
  };
  const _noSelected = () => {
    props.onPress();
    props.selected(false);
    setPressedYes(false);
    setPressedNo(true);
  };

  return (
    <View style={styles.together}>
      <TouchableOpacity onPress={_yesSelected}>
        <View
          style={{
            width: 80,
            borderWidth: 1,
            borderColor: ACTIVE_BLUE,
            backgroundColor: pressedYes ? ACTIVE_BLUE : 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: font_xs,
              color: pressedYes ? 'white' : MAIN_GRAY,
            }}>
            Yes
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={_noSelected}>
        <View
          style={{
            width: 80,
            borderWidth: 1,
            borderColor: ACTIVE_BLUE,
            backgroundColor: pressedNo ? ACTIVE_BLUE : 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: font_xs,
              color: pressedNo ? 'white' : MAIN_GRAY,
            }}>
            No
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
  },
  wrapper: {
    padding: 10,
  },
  together: {
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
const fakeAuditFormData = {
  id: 'a7d16744-3b2c-48cf-8ee9-b8ca60466d4c',
  title: 'Store Daily Audit ',
  division: '',
  organizationId: 'f8feed11-ccfb-4f7b-ae51-259f80e13c3c',
  createdAt: '2019-11-05T09:20:21.441Z',
  updatedAt: null,
  updatedBy: null,
  isActive: true,
  activationChangedAt: null,
  activateOn: null,
  deactivateOn: null,
  isMandatory: true,
  submissionCnt: null,
  taskCnt: null,
  locationCnt: null,
  version: 2,
  requiredToCompleteOnTaskCreation: true,
  isFeedbackForm: false,
  feedbackType: null,
  controls: [
    {
      id: '25b1c4bb-bed5-464b-b9af-14a481177088',
      type: 'yes_no',
      sortOrder: 100,
      settings: [
        {
          name: 'title',
          value: 'Store has extra stock of sanitizers and PPE ?',
        },
        {
          name: 'yes_label',
          value: 'Yes',
        },
        {
          name: 'no_label',
          value: 'No',
        },
        {
          name: 'name',
          value: 'Yes / No',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
        {
          name: 'show_score',
          value: 'false',
        },
        {
          name: 'yes_score',
          value: '1',
        },
        {
          name: 'no_score',
          value: '0',
        },
      ],
    },
    {
      id: '774f2071-0704-455a-9d47-805838904d63',
      type: 'yes_no',
      sortOrder: 200,
      settings: [
        {
          name: 'title',
          value: 'Outside front of store - signage on display ',
        },
        {
          name: 'yes_label',
          value: 'Yes',
        },
        {
          name: 'no_label',
          value: 'No',
        },
        {
          name: 'name',
          value: 'Yes / No',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
        {
          name: 'show_score',
          value: 'false',
        },
        {
          name: 'yes_score',
          value: '1',
        },
        {
          name: 'no_score',
          value: '0',
        },
      ],
    },
    {
      id: '9aacf9cb-e667-4209-b3ef-a0103b8a0693',
      type: 'yes_no',
      sortOrder: 300,
      settings: [
        {
          name: 'title',
          value: 'Daily briefing completed on time?',
        },
        {
          name: 'yes_label',
          value: 'Yes',
        },
        {
          name: 'no_label',
          value: 'No',
        },
        {
          name: 'name',
          value: 'Yes / No',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
        {
          name: 'show_score',
          value: 'false',
        },
        {
          name: 'yes_score',
          value: '1',
        },
        {
          name: 'no_score',
          value: '0',
        },
      ],
    },
    {
      id: '8e891d3b-ab20-4876-b9a3-0cc5ae6fdccc',
      type: 'ratingv2',
      sortOrder: 400,
      settings: [
        {
          name: 'show_score',
          value: 'false',
        },
        {
          name: 'title',
          value: 'Is New Operating Procedure Clearly Defined ',
        },
        {
          name: 'rate_title',
          value: 'Is New Operating Procedure Clearly Defined ',
        },
        {
          name: 'option1_title',
          value: 'No ',
        },
        {
          name: 'option1_score',
          value: '0',
        },
        {
          name: 'option2_title',
          value: 'Somewhat ',
        },
        {
          name: 'option2_score',
          value: '1',
        },
        {
          name: 'option3_title',
          value: 'Yes, its great ',
        },
        {
          name: 'option3_score',
          value: '2',
        },
        {
          name: 'option_count',
          value: '3',
        },
        {
          name: 'name',
          value: 'Scale Rating',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
      ],
    },
    {
      id: 'd40a1116-6100-4210-bec7-c87e8421b341',
      type: 'checkbox_group',
      sortOrder: 500,
      settings: [
        {
          name: 'title',
          value: 'What cleaning procedures were carried out',
        },
        {
          name: 'name',
          value: 'Multiple Choice',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'show_score',
          value: 'false',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
        {
          name: 'page_break_avoid',
          value: 'false',
        },
      ],
      controls: [
        {
          id: '3b88acfa-c9b2-40d8-9db9-90b836b3a9ae',
          type: 'checkbox',
          parentId: 'd40a1116-6100-4210-bec7-c87e8421b341',
          sortOrder: 501,
          settings: [
            {
              name: 'title',
              value: 'Disinfection ',
            },
            {
              name: 'name',
              value: 'Multiple Choice-1',
            },
            {
              name: 'show_only_in_report',
              value: 'false',
            },
            {
              name: 'show_score',
              value: 'false',
            },
          ],
        },
        {
          id: 'f27ea846-b636-4865-8150-9b2b7ad4e287',
          type: 'checkbox',
          parentId: 'd40a1116-6100-4210-bec7-c87e8421b341',
          sortOrder: 502,
          settings: [
            {
              name: 'title',
              value: 'Steam cleaning',
            },
            {
              name: 'name',
              value: 'Multiple Choice-2',
            },
            {
              name: 'show_only_in_report',
              value: 'false',
            },
            {
              name: 'show_score',
              value: 'false',
            },
          ],
        },
        {
          id: '41aed207-9a9a-430e-9883-d8fd45d5cb5a',
          type: 'checkbox',
          parentId: 'd40a1116-6100-4210-bec7-c87e8421b341',
          sortOrder: 503,
          settings: [
            {
              name: 'title',
              value: 'Weekly cleaning ',
            },
            {
              name: 'name',
              value: 'Multiple Choice-3',
            },
            {
              name: 'show_only_in_report',
              value: 'false',
            },
            {
              name: 'show_score',
              value: 'false',
            },
          ],
        },
      ],
    },
    {
      id: '4d2c0d0f-db6f-41ea-8675-89b66f7fb527',
      type: 'radio_button_group',
      sortOrder: 600,
      settings: [
        {
          name: 'title',
          value: 'Price Tag Updated ',
        },
        {
          name: 'show_score',
          value: 'false',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'name',
          value: 'Single Choice',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
        {
          name: 'option1_title',
          value: 'Complete ',
        },
        {
          name: 'option1_score',
          value: 'null',
        },
        {
          name: 'option2_title',
          value: 'Complete, needs revisions ',
        },
        {
          name: 'option2_score',
          value: 'null',
        },
        {
          name: 'option3_title',
          value: 'Not complete',
        },
        {
          name: 'option3_score',
          value: 'null',
        },
        {
          name: 'option_count',
          value: '3',
        },
      ],
    },
    {
      id: 'bcff23ae-5671-408d-8770-5dcbb695d050',
      type: 'button',
      sortOrder: 700,
      settings: [
        {
          name: 'action',
          value: 'exit_block',
        },
        {
          name: 'title',
          value: 'Submit',
        },
        {
          name: 'name',
          value: 'Submit',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
        {
          name: 'save_button',
          value: 'true',
        },
        {
          name: 'save_button_label',
          value: 'Save Form',
        },
      ],
    },
  ],
};

const fakePrinterTroubleShootData = {
  id: '9a99ff76-f6ce-448a-bf38-2e1f5d1ffbd6',
  title: 'Printer Troubleshooting',
  division: '',
  organizationId: 'f8feed11-ccfb-4f7b-ae51-259f80e13c3c',
  createdAt: '2020-02-14T21:36:39.077Z',
  updatedAt: null,
  updatedBy: null,
  isActive: true,
  activationChangedAt: null,
  activateOn: null,
  deactivateOn: null,
  isMandatory: true,
  submissionCnt: null,
  taskCnt: null,
  locationCnt: null,
  version: 2,
  requiredToCompleteOnTaskCreation: true,
  isFeedbackForm: false,
  feedbackType: null,
  controls: [
    {
      id: 'd3eccb06-8d71-49be-b85b-fea83a0cabdf',
      type: 'radio_button_group',
      sortOrder: 100,
      settings: [
        {
          name: 'title',
          value: 'Is the printer plugged in?',
        },
        {
          name: 'show_score',
          value: 'false',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'name',
          value: 'Single Choice',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
        {
          name: 'option1_title',
          value: 'Yes',
        },
        {
          name: 'option1_score',
          value: 'null',
        },
        {
          name: 'option2_title',
          value: 'No',
        },
        {
          name: 'option2_score',
          value: 'null',
        },
        {
          name: 'option_count',
          value: '2',
        },
      ],
    },
    {
      id: '1a67f2bc-f5c2-4d42-b8ae-be8b932a877c',
      type: 'radio_button_group',
      sortOrder: 200,
      settings: [
        {
          name: 'title',
          value: 'Is the printer turned on?',
        },
        {
          name: 'show_score',
          value: 'false',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'name',
          value: 'Single Choice',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
        {
          name: 'option1_title',
          value: 'Yes',
        },
        {
          name: 'option1_score',
          value: 'null',
        },
        {
          name: 'option2_title',
          value: 'No',
        },
        {
          name: 'option2_score',
          value: 'null',
        },
        {
          name: 'option_count',
          value: '2',
        },
      ],
    },
    {
      id: '3b4a94e8-aad5-48a5-bdd2-d437afa8b2a7',
      type: 'radio_button_group',
      sortOrder: 300,
      settings: [
        {
          name: 'title',
          value: 'Does the printer have ink?',
        },
        {
          name: 'show_score',
          value: 'false',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'name',
          value: 'Single Choice',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
        {
          name: 'option1_title',
          value: 'Yes',
        },
        {
          name: 'option1_score',
          value: 'null',
        },
        {
          name: 'option2_title',
          value: 'No',
        },
        {
          name: 'option2_score',
          value: 'null',
        },
        {
          name: 'option_count',
          value: '2',
        },
      ],
    },
    {
      id: '8cc64f51-d650-4acd-9ad1-294229a621d1',
      type: 'button',
      sortOrder: 400,
      settings: [
        {
          name: 'action',
          value: 'exit_block',
        },
        {
          name: 'title',
          value: 'Submit',
        },
        {
          name: 'name',
          value: 'Submit',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
        {
          name: 'save_button',
          value: 'true',
        },
        {
          name: 'save_button_label',
          value: 'Save Form',
        },
      ],
    },
  ],
};

const fakeInventoryCheckData = {
  id: '227026e5-20e2-445d-ad97-22aef91ff730',
  title: 'Inventory check',
  division: 'Sample form',
  organizationId: 'f8feed11-ccfb-4f7b-ae51-259f80e13c3c',
  createdAt: '2020-01-16T15:09:44.237Z',
  updatedAt: null,
  updatedBy: null,
  isActive: true,
  activationChangedAt: null,
  activateOn: null,
  deactivateOn: null,
  isMandatory: false,
  submissionCnt: null,
  taskCnt: null,
  locationCnt: null,
  version: 2,
  requiredToCompleteOnTaskCreation: true,
  isFeedbackForm: false,
  feedbackType: null,
  controls: [
    {
      id: '055d5560-768c-4b86-95c0-ed6a4a22a220',
      type: 'text',
      sortOrder: 100,
      settings: [
        {
          name: 'title',
          value: '# of Cocoa Cashew Moringa',
        },
        {
          name: 'purpose',
          value: 'number',
        },
        {
          name: 'keyboard',
          value: 'numeric',
        },
        {
          name: 'name',
          value: 'Number',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
      ],
    },
    {
      id: 'caf7da65-81eb-483b-854b-5524af156e30',
      type: 'text',
      sortOrder: 200,
      settings: [
        {
          name: 'title',
          value: '# of Baobab and Tigernut',
        },
        {
          name: 'purpose',
          value: 'number',
        },
        {
          name: 'keyboard',
          value: 'numeric',
        },
        {
          name: 'name',
          value: 'Number',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
      ],
    },
    {
      id: 'bad84b81-cd4c-4d53-923b-6e7e2c5fa139',
      type: 'text',
      sortOrder: 300,
      settings: [
        {
          name: 'title',
          value: '# of Moringa Ginger and Superfruits',
        },
        {
          name: 'purpose',
          value: 'number',
        },
        {
          name: 'keyboard',
          value: 'numeric',
        },
        {
          name: 'name',
          value: 'Number',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
      ],
    },
    {
      id: 'bc55d40b-e821-4a05-8414-20e6faa45c5e',
      type: 'text',
      sortOrder: 400,
      settings: [
        {
          name: 'title',
          value: '# of Peanut',
        },
        {
          name: 'purpose',
          value: 'number',
        },
        {
          name: 'keyboard',
          value: 'numeric',
        },
        {
          name: 'name',
          value: 'Number',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
      ],
    },
    {
      id: '1c710f1f-a188-42fc-ba71-d1c24f2fc6d4',
      type: 'text',
      sortOrder: 500,
      settings: [
        {
          name: 'title',
          value: '# of Peanut Butter and Seasalt',
        },
        {
          name: 'purpose',
          value: 'number',
        },
        {
          name: 'keyboard',
          value: 'numeric',
        },
        {
          name: 'name',
          value: 'Number',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'show_only_in_report',
          value: 'false',
        },
      ],
    },
    {
      id: '7ee0b179-084b-4c83-a39d-a941b1085adc',
      type: 'file_upload',
      sortOrder: 600,
      settings: [
        {
          name: 'title',
          value: 'Attach a photo of the display',
        },
        {
          name: 'name',
          value: 'File Upload',
        },
        {
          name: 'required',
          value: 'false',
        },
        {
          name: 'upload_button_text',
          value: 'Browse Files',
        },
      ],
    },
  ],
};
