import React from 'react'
import { StyleSheet, Text, View,} from 'react-native'
import Modal from 'react-native-modal';

import { showModalGuest } from './ModalGuest';
import { showModalCheckinCheckout } from './modalCheckinCheckout';
import { ShowFilter } from './modalFilter';
import { showSorting } from './modalSorting'
import { showDestination} from './modalDestination';
import { rescheduleCancelation } from './modalRescheduleCancelation';
import { useDispatch } from 'react-redux';
import { request_Search_hotel_by_location } from '../../redux/action/actionhotel';


const index = ({isModal, closeModal, label, page, modal, data}) => {
    const dispatch = useDispatch()
    if(modal === 'modal2'){
        return (
            <View>
                <Modal 
                isVisible={isModal} 
                style={styles.modal_add}
                onBackdropPress={() => closeModal()}
                >
                        <View style={styles.modal_headline2}>
                            {page === 'HOME'? showModalGuest({label, closeModal}) 
                            : page === 'FILTER' && showSorting(label, data,)
                        }
                    </View>
                </Modal>
            </View>
        )
    }else if(modal === 'rescheduleCancelation'){
        return (
            <View>
                <Modal 
                isVisible={isModal} 
                style={styles.modal_add}
                onBackdropPress={() => closeModal()}
                >
                    <View style={styles.modal_headlineResCancel}>
                        {rescheduleCancelation({closeModal})}
                    </View>
                </Modal>
            </View>
        )
    }else if (modal === 'Check-in Check-out'){
        return (
            <View>
                <Modal isVisible={isModal} style={styles.modal_add}
                swipeDirection="down"
                onSwipeComplete={(e) => { closeModal(); }}
                >
                    <View style={styles.modal_headline3}>
                    {showModalCheckinCheckout({label, closeModal}) }
                    </View>
                </Modal>
            </View>
        )
    }else{
        return (
            <View>
                <Modal isVisible={isModal} style={styles.modal_add}
                // swipeDirection="down"
                // onSwipeComplete={(e) => { closeModal(); }}
                onBackdropPress={() => {closeModal();
                    label === 'Destination' &&
                    dispatch(request_Search_hotel_by_location(null))}}
                >
                    <View style={styles.modal_headline}>
                    {
                        page === 'HOME'? showDestination({label, closeModal}) :
                        page === 'FILTER' ? ShowFilter(label, isModal, closeModal):
                        page === 'RESCHEDULE' && showModalCheckinCheckout({page,label,closeModal})
                        // label === 'Reschedule' && <Reschedule data={data} closeModal={closeModal}/>

                    }
                    </View>
                </Modal>
            </View>
        )

    }
}

export default index

const styles = StyleSheet.create({
    modal_add: {
        justifyContent: 'flex-end',
        margin: 0,
      },
      modal_headline: {
        width: '100%',
        height:'96%',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        
      },
      modal_headline3: {
        width: '100%',
        height:'80%',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        padding:15,
      },
      modal_headlineResCancel: {
        width: '100%',
        height:'20%',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        padding:15,
      },
      modal_headline2: {
        width: '100%',
        height:'45%',
        backgroundColor: '#FFFFFF',
        borderTopRightRadius:18,
        borderTopLeftRadius:18,
        padding:15,
      },
      Modal_Item_Text: {
        color: '#fff',
        marginLeft: 30,
        fontSize: 18,
      },
})
