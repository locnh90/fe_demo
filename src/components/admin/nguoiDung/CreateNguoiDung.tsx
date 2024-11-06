import { createKichCo } from "@/app/service/sanPham/kichCo";
import { createNguoiDung } from "@/app/service/taiKhoan/nguoiDung";
import { Modal, Input, Form, Row, Col, message } from "antd";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
}

const CreateNguoiDung = (props: IProps) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;

  const [form] = Form.useForm();

  const handleCloseCreateModal = () => {
    form.resetFields();
    setIsCreateModalOpen(false);
  };

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const res = await createNguoiDung(values);
    if (res?.code === 201) {
      handleCloseCreateModal();
      message.success(`${res.message}`);
    } else {
      message.error(`Thêm thất bại ${res.message}`);
      console.log(res);
    }
  };

  return (
    <Modal
      title="Thêm mới người dùng"
      open={isCreateModalOpen}
      onOk={() => form.submit()}
      onCancel={() => handleCloseCreateModal()}
      maskClosable={false}
    >
      <Form name="basic" onFinish={onFinish} layout="vertical" form={form}>
        <Form.Item
          label="Size"
          name="hoTen"
          rules={[{ required: true, message: "Vui lòng nhập tên người dùng!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateNguoiDung;
