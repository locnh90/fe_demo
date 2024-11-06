
import { createThuongHieu } from "@/app/service/sanPham/thuongHieu";
import { Modal, Input, Form, Row, Col, message } from "antd";

interface IProps {
  isCreateModalOpen: boolean;
  setIsCreateModalOpen: (v: boolean) => void;
}

const CreateThuongHieu = (props: IProps) => {
  const { isCreateModalOpen, setIsCreateModalOpen } = props;

  const [form] = Form.useForm();

  const handleCloseCreateModal = () => {
    form.resetFields();
    setIsCreateModalOpen(false);
  };

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    const res = await createThuongHieu(values);
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
      title="Thêm mới thương hiệu"
      open={isCreateModalOpen}
      onOk={() => form.submit()}
      onCancel={() => handleCloseCreateModal()}
      maskClosable={false}
    >
      <Form name="basic" onFinish={onFinish} layout="vertical" form={form}>
        <Form.Item
          label="Thương hiệu"
          name="tenThuongHieu"
          rules={[{ required: true, message: "Vui lòng nhập tên thương hiệu!" }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateThuongHieu;
