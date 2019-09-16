class Api::MenusController < ApplicationController
  before_action set_menu: only[:show, :update, :destroy]
  
  def index
    render json: Menu.all
  end

  def show
    # /api/menus/:id
    render json: @menu
  end

  def create
    menu = Menu.new(menu_params)
    if menu.save
      render json: menu
    else
      render json: { errors: menu.errors }, status: :unprocessable_entity 
    end
  end

  def update
    @menu.update(complete: !@menu)
    # menu = Menu.find(params[:id])
    # menu.update(complete: !menu.complete)
    render json: menu
  end


  def destroy
    @menu.destroy
    render json {message: 'menu deleted'}
  end

  private
  def menu_params
    params.require(:menu).permit(:name)

    def set_menu
      @menu = Menu.find(params[:id])
end
