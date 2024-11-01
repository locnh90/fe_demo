import { createChatLieu } from "@/app/service/sanPham/chatLieu";
import { createKichCo } from "@/app/service/sanPham/kichCo";
import { Modal, Input, Form, Row, Col, message } from "antd";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
}

const CreateChatLieu = (props: IProps) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;

  const [form] = Form.useForm();

  const handleCloseCreateModal = () => {
    form.resetFields();
    setIsCreateModalOpen(false);
  };

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const res = await createChatLieu(values);
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
      title="Thêm mới chất liệu"
      open={isCreateModalOpen}
      onOk={() => form.submit()}
      onCancel={() => handleCloseCreateModal()}
      maskClosable={false}
    >
      <Form name="basic" onFinish={onFinish} layout="vertical" form={form}>
        <Form.Item
          label="Tên chất liệu"
          name="tenChatLieu"
          rules={[{ required: true, message: "Vui lòng nhập tên chất liệu!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateChatLieu;
