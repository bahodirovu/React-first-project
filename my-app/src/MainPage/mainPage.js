import React, { useState, useEffect } from "react";
import PostsApi from "../API/PostApi";
import FilterAndSearch from "../components/FilterAndSearch";
import Pagination from "../components/Pagination/Pagination";
import PostForm from "../components/PostForm";
import TableList from "../components/TableList";
import Mybutton from "../components/UI/button/Mybutton";
import Loading from "../components/UI/Loading/Loading";
import MyModal from "../components/UI/Modal/MyModal";
import { usePosts } from "../Hooks/useCreate";
import { useFetchin } from "../Hooks/useFetching";
import { getPageArray, getPageCounts } from "../utils/page";

function MainPage() {
  const [post, setPost] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const searchAndSort = usePosts(post, filter.sort, filter.query);
  const [fetchPosts, isLoading, postError] = useFetchin(async (limit, page) => {
    const response = await PostsApi.getPosts(limit, page);
    setPost(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPage(getPageCounts(totalCount, limit));
  });

  const createPost = (newpost) => {
    setPost([...post, newpost]);
    setModal(false);
  };
  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  useEffect(() => {
    fetchPosts(limit, page);
  }, []);

  const removePost = (posts) => {
    setPost(post.filter((s) => s.id !== posts.id));
  };

  return (
    <div className="app w-75 mx-auto mb-3 ">
      <Mybutton className="btn btn-primary my-2" onClick={() => setModal(true)}>
        Add Posts
      </Mybutton>
      <MyModal modal={modal} setModal={setModal}>
        <PostForm createPost={createPost} />
      </MyModal>
      <FilterAndSearch filter={filter} setFilter={setFilter} />
      {postError && <p>Error</p>}
      {isLoading ? (
        <div className="d-flex justify-content-center mt-50">
          <Loading></Loading>
        </div>
      ) : (
        <TableList
          remove={removePost}
          post={searchAndSort}
          title="Posts for you"
        />
      )}
      <Pagination
        page={page}
        changePage={changePage}
        totalPage={totalPage}
      ></Pagination>
    </div>
  );
}

export default MainPage;
