import axios from "axios";
import { quanLyPhimService } from "../../services/quanLyPhimService";
import { DOMAIN } from "../../util/settings/config";
import { SET_CAROUSEL } from "../types/CarouselType";


export const getCarouselAction = (thamSo) => {


    return async (dispatch) => {

        try {
            const result = await quanLyPhimService.layDanhSachBanner();

            dispatch({
                tpye: SET_CAROUSEL,
                arrImg: result.content.data
            })
        } catch (errors) {
            console.log('errors', errors);
        }



    };
}