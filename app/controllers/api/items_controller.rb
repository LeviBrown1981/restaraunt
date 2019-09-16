class Api::ItemsController < ApplicationController
  def index
    render json: .Menu.item.all
  end

  def create
    item = Menu.item.new(item_params)
    if item.save
      render json: item
    else
      render json: { errors: item.errors }, status: :unprocessable_entity 
    end
  end

  def update
    item = Menu.item.find(params[:id])
    item.update(complete: !item.complete)
    render json: item
  end

  def destroy
    Menu.item.find(params[:id]).destroy
    render json: { message: 'Item deleted' }
  end

  private

  def item_params
    params.require(:item).permit(:name, :complete)
  end

  def set_item
    @item = Menu.item.find(params[:id])
  end
end
