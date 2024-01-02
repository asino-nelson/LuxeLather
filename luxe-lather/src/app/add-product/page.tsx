
export const metadata = {
    title: "Add Product-LuxLather"
  };

export default function AddProductPage() {
    return(
        <div>
            <h1 className="text-lg font-bold mb-3">Add Product</h1>
            <form>
                <input 
                 required
                 name="name"
                 placeholder="Product name"
                 className="input-bordered input mb-3 w-full"
                />
                <textarea 
                 required
                 name="description"
                 placeholder="Description"
                 className="textarea-bordered textarea mb-3 w-full"
                />
                <input 
                 required
                 name="imageUrl"
                 placeholder="Image URL"
                 type="url"
                 className="input-bordered input mb-3 w-full"
                />
                <input 
                 required
                 name="price"
                 placeholder="Price"
                 type="number"
                 className="input-bordered input mb-3 w-full"
                />
                <button
                 type="submit"
                 className="btn btn-primary btn-block"
                >
                    Add Product
                </button>
            </form>
        </div>
    )
}