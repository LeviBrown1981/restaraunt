require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get menus" do
    get api_menus_url
    assert_response :success
  end

  test "should get index" do
    get api_index_url
    assert_response :success
  end

  test "should get show" do
    get api_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get api_destroy_url
    assert_response :success
  end

end
