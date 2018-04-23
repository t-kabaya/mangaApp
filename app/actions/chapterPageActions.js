import HttpUtil from '../utils/HttpUtil';

const STATR_FETCH_CHAPTER_PAGE_DATA = "STATR_FETCH_CHAPTER_PAGE_DATA";
const FETCH_CHAPTER_PAGE_DATA = "FETCH_CHAPTER_PAGE_DATA";

export let fetchChapterPageData = (url,params,isLoading) => {
    return (dispatch) => {
        dispatch({
            isLoading,
            type: STATR_FETCH_CHAPTER_PAGE_DATA
        });
        HttpUtil.fetchGet(
            url,
            params,
            (jsonData) => {
                dispatch({
                    type: FETCH_CHAPTER_PAGE_DATA,
                    data: jsonData.result.chapterList,
                    isSuccess: true
                });
            },
            (err) => {
                dispatch({
                    type: FETCH_CHAPTER_PAGE_DATA,
                    err,
                    isSuccess: false
                });
            }
        );
    }
}

